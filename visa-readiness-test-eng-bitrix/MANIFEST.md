# English Version Manifest

Local folder:

`C:\Users\wallc\Documents\Сайт и реклама\visa-readiness-test-eng-bitrix`

Local archive:

`C:\Users\wallc\Documents\Сайт и реклама\visa-readiness-test-eng-bitrix-20260629-080211.zip`

## Files Prepared Locally

| File | Size |
| --- | ---: |
| `visa-readiness-test.html` | 166,229 bytes |
| `visa-readiness-test-bitrix.html` | 166,229 bytes |
| `BITRIX-CODE-PASTE-ME.txt` | 166,229 bytes |
| `migrant-id-logo.png` | 62,571 bytes |
| `google-sheets-apps-script.js` | 2,181 bytes |
| `README.md` | 1,505 bytes |
| `AGENTS.md` | 4,138 bytes |

## Current Verification

- English HTML contains no Cyrillic user-facing strings.
- JavaScript script block parses successfully.
- Citizenship list includes `Other / not listed` for candidates whose country is not in the list.
- Logo is embedded into `visa-readiness-test.html`, `visa-readiness-test-bitrix.html`, and `BITRIX-CODE-PASTE-ME.txt`.
- Contact page URL is `https://migrantid.org/form_duqu/`.
- No `/ru/form_duqu/` URL is present in the English files.
- Public share URL is `https://migrantid.org/test/`.
- Local storage key is `migrantIdVisaReadinessStateENv1` to avoid conflict with the Russian version.
- Google Sheets webhook is present in the English HTML.
- The contact button calls `sendGoogleSheetSnapshot('open_contact_page')` before navigation.
- Google sending uses `navigator.sendBeacon`; fallback uses `fetch` with `keepalive: true`.

## Google Sheets Check Note

A direct POST test from the local Codex environment was blocked by Windows HTTPS/TLS client errors (`SEC_E_NO_CREDENTIALS` / closed connection). The code path is wired correctly; the final live check should be done from the published Bitrix page by pressing `Message a MIGRANT ID specialist` and checking the Google Sheet for the submitted row.

## GitHub Upload Note

The full HTML files are prepared locally. The current GitHub connector can write text files but cannot attach a large local file directly without installed `git`/`gh` or a browser file-upload session. Use the local `BITRIX-CODE-PASTE-ME.txt` file for Bitrix publishing.
