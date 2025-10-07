# PanPack Template
Like the previous template pack, this is a simple "pack" meant to save you time. This time, it's geared more towards pack developers, being built off of pakku.

## Features
- Automatically updating mods on launch
- Build and Release Actions
- Autolinting
- Workspace (in the .vscode folder)
- Codegenerated EN_UD support
- Autobumping manifest version
- Issue templates
- Clientside, Serverside, nonexported mods

## Setup
Using Prism Launcher, clone this Repository into your [`instances\(instancename)\minecraft`](https://github.com/user-attachments/assets/f9de6554-925d-4827-b51c-c7159e6f915f) folder, and copy the contents of `minecraft\.pakku\prism-overrides` into your `(instancename)` folder. From there, add `java -jar pakku.jar fetch` to your [pre-launch commands](https://i.imgur.com/z7eQ3Ze.png).

To add your mods, refer to the Pakku docs, depending if you plan on [importing a manifest](https://juraj-hrivnak.github.io/Pakku/setting-up-a-modpack.html) or want to [add/remove mods](https://juraj-hrivnak.github.io/Pakku/managing-projects.html#adding-projects) yourself. (Pakku will add dependencies for you.)

## Building
* Before you can run the buildscripts, you will need to go to the repository's [secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets) and add a [`CURSEFORGE_TOKEN`](https://support.curseforge.com/en/support/solutions/articles/9000197321-curseforge-upload-api) secret and `CURSEFORGE_ID` variable
* Before releasing, go to release.yml, and change anything that's commented with "Change this!"
    * The template supports automatically posting changelogs to discord: add a [discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to your secrets with the name `discord-webhook`.


<!-- #### I need a Curseforge Key?
Accessing CurseForge requires the CurseForge API key.

The API key can be generated in the CurseForge for Studios(https://console.curseforge.com/) developer console.

 1. Login to the developer console
 2. Go to the "API keys" tab
 3. Copy your API key
 4. Run `java -jar pakku.jar credentials set --cf-api-key '(API Key)'` in your `minecraft` folder via your terminal (to get to the folder, use the [cd](https://en.wikipedia.org/wiki/Cd_(command)) command). -->


## Credits
- Buildscript pulled from [Terrafirmagreg](https://www.curseforge.com/minecraft/modpacks/terrafirmagreg-modern)
