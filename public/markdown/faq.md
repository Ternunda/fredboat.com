# (Very) Frequently Asked Questions

## How do I play music with the bot?
Please read this fine manual. Specifically the part with the music commands.

## My server isn't showing up when I try to add the bot via the link.
First, make sure you log in with your Discord Credentials at discordapp.com. Also, if you are not the server owner, ensure you have the "Manage Server" permission. You can not add the bot without it.

## How do I add an entire playlist or livestream to the queue?
Simply link a playlist or livestream with the following syntax:

```
;;play <url-to-playlist-or-livestream>
```

## How do I restrict music commands to a specific channel or role?
The bot will only listen to music commands invoked in channels it can actually **write** to. Simply override it such that the music bot can only talk in the channels you want the bot to be usable from.

If you want to restrict the bot to a specific role, you can always just restrict the bot to a channel only accessible by a specific set of roles.

## How do I selfhost the bot?
FredBoat was not originally written to be easily set up for selfhosting, but due to popular demand [I have written a tutorial.](http://fredboat.com/docs/selfhosting)

## The music bot is telling me it doesn't have permission to connect/play music. How do I give it permission?
You are trying to play music in a voice channel, but your __Discord server permissions__ prevents it from connecting or speaking. You would need to change the permissions of the channel to allow the bot to connect and speak, as you would do with a user. For official help on this topic, see [Discord's support center](https://support.discordapp.com/hc/en-us/articles/206029707).

## Why is the bot stuttering?
The bot is sometimes under very heavy load, particularly around weekends. You can help me reduce the stuttering and bring the bot to more people by supporting me on my [Patreon campaign](https://www.patreon.com/fredboat).

## Why can't I hear the music bot, but other people can?
This is a Discord bug. Occasionally you may need to restart your Discord client before you can hear users and bots speaking in voice chat.

## The bot responds to my commands but I can't hear it!
First, be sure you haven't accidentally muted or turned the bot down to 0. Right click on the bot in the voice channel to check. If that is not the problem simply change your voice region in the Server Settings (you can change it right back).

## The bot is saying I can't play a youtube video because it is blocked! How do I get around this?
FredBoat is currently hosted in the US, which means that any videos that YouTube blocks in the US are unavailable. There's currently no way around this, but we may set up an internal proxy.

## How do I get the bot to stay in my channel?
The bot will automatically leave a voice channel if it is left unused for too long. This is to improve performance of the bot, as leaving the bot idling in a few extra thousand voice channel takes a hit on the CPU.
