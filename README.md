# PanPack Template
Like the previous template pack, this is a simple "pack" meant to save you time. This time, it's geared more towards pack developers, using my style of folder organization as well as containing Monifactory's Development Tools (build tools, autolint, workspace, etc.) to aid in pack development.

## Features
- Build and Release Actions
- Autolinting
- Workspace (in the .vscode folder)
- Codegenerated EN_UD support
- Autobumping manifest version
- Issue templates

## Setup
To set up, just use the template, then follow [Monifactory setup instructions](https://github.com/ThePansmith/Monifactory/blob/main/CONTRIBUTING.md#setting-up-an-instance-repository-for-use-in-dev), but using your minecraft instance and your new repository instead.

To publish to CF, you just need to add your [`CF_PROJECT_ID`](https://github.com/user-attachments/assets/cf1eb689-ced9-475f-9cdc-f044699f3c2d) as a [variable](https://github.com/user-attachments/assets/69edf220-b1e8-4e71-aa2c-f43b4a302fef), and a [`RELEASE_TOKEN`](https://authors-old.curseforge.com/account/api-tokens) and a [`API_TOKEN`](https://support.curseforge.com/en/support/solutions/articles/9000208346-about-the-curseforge-api-and-how-to-apply-for-a-key#key) as secrets. Zip-stuff will also need to be granted permissions with `git add --chmod=+x tools/zip-stuff`.
