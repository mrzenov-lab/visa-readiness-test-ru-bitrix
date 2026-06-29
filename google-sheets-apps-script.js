const SPREADSHEET_ID = '1iF2mMhMBY0WOSc3gwr4NGs4CpOB3KEfOfy9PSSIrLEE';
const SHEET_NAME = 'Заявки теста';

const HEADERS = [
  'Date / time ISO',
  'Date / time local',
  'Event',
  'Device',
  'Viewport',
  'Name',
  'Age',
  'Citizenship',
  'Vacancy',
  'Destination',
  'Duration',
  'Work language',
  'Criminal status',
  'Finance requirement',
  'Score',
  'Rating',
  'Status',
  'Stop factors',
  'Driver categories',
  'Driver Code 95',
  'Driver experience region',
  'Driver experience proof',
  'Selected documents',
  'Missing documents',
  'Answers JSON',
  'Selected document IDs',
  'Page URL',
  'Public test URL',
  'User agent'
];

function doPost(e) {
  const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  const sheet = getSheet_();

  sheet.appendRow([
    payload.submittedAtIso || '',
    payload.submittedAtLocal || '',
    payload.event || '',
    payload.device || '',
    payload.viewport || '',
    payload.name || '',
    payload.age || '',
    payload.citizenship || '',
    payload.vacancy || '',
    payload.destination || '',
    payload.duration || '',
    payload.workLanguage || '',
    payload.criminalStatus || '',
    payload.financeRequirement || '',
    payload.score || '',
    payload.rating || '',
    payload.status || '',
    payload.stopFactors || '',
    payload.driverCategories || '',
    payload.driverCode95 || '',
    payload.driverExperienceRegion || '',
    payload.driverExperienceProof || '',
    payload.selectedDocuments || '',
    payload.missingDocuments || '',
    payload.answersJson || '',
    payload.selectedDocumentIds || '',
    payload.pageUrl || '',
    payload.publicTestUrl || '',
    payload.userAgent || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}
