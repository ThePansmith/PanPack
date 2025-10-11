# PanPack Template
Like the previous template pack, this is a simple "pack" meant to save you time. This time, it's geared more towards pack developers, being built off of pakku, now featuring automatic linting, autofetching mods, and more!

## Features
- Pakku:
   - Easily control mods and resourcepacks, handling dependendices for you.
      - Mods can be easily marked as client or serverside only, or even to [not export at all](https://github.com/ThePansmith/PanPack/blob/cfda140750ebd454094415e32a4f971d49153428/pakku.json#L31C1-L34C10)!
   - Simultaneous Curseforge and Modrinth Modpack Support[^1]
   - Mods can be easily fetched 
- Actions:
   - Autolinting
      - By default, will **automatically fix** any lint issues in the KubeJS folder, keeping your code organized hassle free.
         - This behavior can be easily changed as applicable, if you prefer it to check pull requests
      - Custom Rules for Recipe Spacing, Call Chains and GTm Multiblocks included
   - Autoupdating:
      - **Automatically sync your instance's mods** with the repository
      - **Automatically sync your instance's modloader version** (and more) with the repository
         - Supports Forge and NeoForge
   - Build and Release
      - Automatically builds on commit, and will push to curseforge on a version change (Serverpacks included)
      - Automatically Diffs Mods, and attaches your changelog
      - Can replace text with the update number, useful for the main menu or loading screen.
      - Can publish a truncated changelog to discord if a webhook is provided.
- Other:
   - Very quick setup for contributors
   - VSC Workspace (in the .vscode folder)
   - Issue and PR templates
   - .gitignore (including some mod configs that add a last edited date)

## Setup
Using Prism Launcher, clone your fork into an empty [`(instancename)\minecraft`](https://github.com/user-attachments/assets/f9de6554-925d-4827-b51c-c7159e6f915f) folder, and copy the contents of `(instancename)\minecraft\.pakku\prism-overrides`[^2] into your `(instancename)` folder. From there, add `java -jar pakku.jar fetch` to your [pre-launch commands](https://i.imgur.com/z7eQ3Ze.png).

<details>
  <summary>Modloader Sync</summary>
   Those wanting to also automatically sync the modloader should use one of the below commands instead.
   
  Windows:
  ```cmd
  cmd /c "java -jar pakku.jar fetch && copy /Y "$INST_MC_DIR\.pakku\prism-overrides\mmc-pack.json" "$INST_DIR\mmc-pack.json"
  ```
  Linux and MacOS
  ```bash
  java -jar pakku.jar fetch && cp -f "$INST_MC_DIR/.pakku/prism-overrides/mmc-pack.json" "$INST_DIR/mmc-pack.json"
  ```
</details>

To add your mods, refer to the Pakku docs, depending if you plan on [importing a manifest](https://juraj-hrivnak.github.io/Pakku/setting-up-a-modpack.html) and/or want to [add/remove mods](https://juraj-hrivnak.github.io/Pakku/managing-projects.html#adding-projects) yourself. In either case, override `pakku.json` and `pakku-lock.json` with your own information, and add your kubekjs scripts, etc.

Before you can run the buildscripts, you will need to go to the repository's [secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets) and add a [`CURSEFORGE_TOKEN`](https://support.curseforge.com/en/support/solutions/articles/9000197321-curseforge-upload-api) secret and `CURSEFORGE_ID` variable. Before releasing, go to [release.yml](https://github.com/ThePansmith/PanPack/blob/main/.github/workflows/release.yml), and change anything that's commented with "Change this!"

## Usage
* To initate a curseforge release, update `CHANGELOG.MD` with a new version, [Unreleased] can be used as a staging ground for changes.
* Release type, overrides, and otherwise can be set in pakku.json

## Notes
* Contributors will only need to follow the first step of setup at minimum to get started; simply just clone the repo, move the pack-mmc, and input the command.
* This template supports automatically posting changelogs to discord: add a [discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to your secrets with the name `discord-webhook` if you wish to enable that.
* Modloader syncs also works with your repository's Minecraft version and Modloader, niche as it may be.
* [Unreleased] changes are included in the changelog for builds created from the dev branch.
* Those wishing to handle linting on their end can use the [precommit hook](https://github.com/ThePansmith/Monifactory/blob/main/CONTRIBUTING.md#kubejs-style-guide) to run eslint automatically.


<!-- #### I need a Curseforge Key?
Accessing CurseForge requires the CurseForge API key.

The API key can be generated in the CurseForge for Studios(https://console.curseforge.com/) developer console.

 1. Login to the developer console
 2. Go to the "API keys" tab
 3. Copy your API key
 4. Run `java -jar pakku.jar credentials set --cf-api-key '(API Key)'` in your `minecraft` folder via your terminal (to get to the folder, use the [cd](https://en.wikipedia.org/wiki/Cd_(command)) command). -->


## Credits
- Buildscript modified from [Terrafirmagreg](https://www.curseforge.com/minecraft/modpacks/terrafirmagreg-modern)

[^1]: Modrinth buildscripts are disabled by default, as most pack developers do not plan on releasing to modrinth due to important mods not being, but can be easily uncommented if you do. If also, also add a `MODRINTH_ID` and `MODRINTH_ID`
[^2]: The included `mmc-pack` is for forge 1.20.1, edit/replace `mmc-pack` with your own if on another version. 
