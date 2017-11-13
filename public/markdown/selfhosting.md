# How to selfhost FredBoat
This is a tutorial for users who would like to host their own bot running Fredboat. Please bear in mind that this is not a requirement for using the FredBoat service as I host a public bot that is simple to use.

#### This tutorial is for advanced users. If you can't figure out how to run this, please use the public FredBoat♪♪

## Basic Installation

### Requirements

1. [Java 8 JRE](https://www.java.com/en/)

2. [A registered Discord application](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

3. A Google API key if you want ;;nowplaying and search to function

4. Preferably an x86_64/AMD64 CPU. Strange things may happen if you try running FredBoat on an ARM CPU like on a Raspberry Pi. If you have no idea what this means, you're probably doing it right.

### Download
Pick one of these:
* Download latest [stable build](https://ci.fredboat.com/viewLog.html?buildTypeId=FredBoat_Build&buildId=lastSuccessful&buildBranch=refs%2Fheads%2Fstable&tab=artifacts&guest=1)

* Download the latest ["I-like-living-on-the-edge build"](https://ci.fredboat.com/viewLog.html?buildTypeId=FredBoat_Build&buildId=lastSuccessful&buildBranch=refs%2Fheads%2Fdev&tab=artifacts&guest=1) (unstable) 

* Download the [source code](https://github.com/Frederikam/FredBoat/)

Now [click here](https://fredboat.com/docs/selfhosting#setup) to set up the config and credentials

## Compile from Source

__Not recommended unless you know what you are doing__

### Requirements

1. [Java 8 JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

2. [Git](https://www.atlassian.com/git/tutorials/install-git)

3. [JDK added to your PATH](https://www.tutorialspoint.com/maven/maven_environment_setup.htm)

4. [A registered Discord application](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

5. A Google API key if you want ;;nowplaying and search to function

6. Preferably an x86_64/AMD64 CPU. Strange things may happen if you try running FredBoat on an ARM CPU like on a Raspberry Pi. If you have no idea what this means, you're probably doing it right.


### Instructions

Open Terminal or Command Prompt and `cd` to the directory where you wish to download FredBoat to.

Clone the FredBoat GitHub repository and move into the newly created directory:

```sh
git clone https://github.com/Frederikam/FredBoat.git
cd FredBoat
```

If you want to run unstable/development builds, switch to the development branch:
```sh
git checkout development
```

You can change back anytime to the stable/master branch like this, just remember to compile again after switching:
```sh
git checkout master
```

Now compile the bot:

```sh
./gradlew build
```
or on Windows:
```sh
gradlew build
```


# Setup

To run the bot you should set up a directory that looks like this:

![Directory](https://fred.moe/9Eu.png)

The compiled bot can be found in `FredBoat/FredBoat/build/libs`. A sample `config.yaml` and an example `credentials.yaml` can be found in https://github.com/Frederikam/FredBoat/tree/master/FredBoat or the TeamCity download links above.

In order to run the bot, you must first populate your bot with API credentials for Discord in the `credentials.yaml` file.

Music bot only: Fill in the Discord bot token for patron and a Youtube API key. Set patron to true in the `config.yaml` file and development to false. Fill in the Spotify tokens under the `Optional APIs` to be able to load Spotify playlists.

Full bot: Fill in the Discord bot token for beta, a Youtube API key and every other Optional API key too. Set development to true in the `config.yaml` file and patron to false.

Once you are done configuring, run the bot with `java -jar -Xmx128m FredBoat.jar` from the commandline (double clicking won't work). Make sure you run that command from the directory `FredBoat.jar` is in. You can navigate to the directory like this:
```sh
cd /path/to/my/Download/folder/containing/FredBoat
```


[Follow this link](http://docs.fredboat.com/systemdservice) to find a tutorial on running FredBoat as a `systemd` service.
