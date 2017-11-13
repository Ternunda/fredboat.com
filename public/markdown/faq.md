# (Very) Frequently Asked Questions

## How do I play music with the bot?
Please read this fine manual. Specifically the part with the [music commands](https://fredboat.com/docs/index#music-commands).

## How do I add an entire playlist to the queue?
Simply link a playlist with the following syntax:

```
;;play <url-to-playlist>
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

## The bot is saying I can't play a youtube video because it is blocked! How do I get around this?
FredBoat is currently hosted in the US, which means that any videos that YouTube blocks in the US are unavailable. There's currently no way around this, but we may set up an internal proxy.

## How do I get the bot to stay in my channel?
The bot will automatically leave a voice channel if it is left unused for too long. This is to improve performance of the bot, as leaving the bot idling in a few extra thousand voice channel takes a hit on the CPU. [Join the patreon campaign](https://fredboat.com/docs/donate) to gain access to the exclusive FredBoatPatron, which will stay in your channel.

## Why isn't my server showing in the list when I try to add the bot?
Log in with your discord credentials at [https://discordapp.com](https://discordapp.com). Finally, if you are not the server owner you must have the "Manage Server" permission to invite the bot. 

## The bot is responding, but I can't hear it play music?
Make sure FredBoat is not muted for you by right clicking it in your voice channel. If it is not muted then try changing the voice region in Server Settings (you can change it right back). This will reset the voice connection to discord servers which may be wonky at times.
