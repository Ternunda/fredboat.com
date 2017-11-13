# Permissions and FredBoat
When developing the permission system it was decided we wanted a simple permission system that could easily be configured.
FredBoat uses 4 different ranks each with different permissions.

| Ranks                     | Permission Description                  |
|------------------------------|-----------------------------------------------------------------------|
| 3:Admin                     | Can change [FredBoat configuration](https://fredboat.com/docs/configuration) and edit permissions                  |
| 2:DJ                      | Can skip, can pause/unpause, can change repeat mode, can change shuffle mode, etc. **By default, ``@everyone`` is set to this permission.**                  |
| 1:User                      | Can add tracks to the queue and can only skip their own tracks. Remove ``@everyone`` from the DJ permission to assign them as a User.                  |
| 0:Base                     | Given to everyone without higher ranks. Cannot modify the queue or player, but can still use commands like ;;list, ;;np, et cetera                  |

## Special notes
* Users with the Discord "Administrator" permission and owners implicitly have all perms.
* Permissions are specific for a server, never a channel.
* Higher ranks also have lower rank permissions.
* Permissions can be granted to users or roles. This includes the `@everyone` role.
* By default, everyone has the DJ and User roles. Use the below commands to delete the `@everyone` role from the DJ list and make them Users.

## The permission commands
These are the command available:

```md
;;admin add <user/role>
;;admin del <user/role>
;;admin list
;;dj add <user/role>
;;dj del <user/role>
;;dj list
;;user add <user/role>
;;user del <user/role>
;;user list
```

The name of the command specifies which rank you are modifying or listing. 

These commands are restricted to users with the ADMIN permissions, apart from the `list` subcommand. The `add` subcommand can be used to add usernames or roles to a permission rank.

![add command](https://fred.moe/3tO.png)

The `del` subcommand can be used to remove a user or role from a rank:

![del command](https://fred.moe/4BC.png)

You do not need to specify the full name of a user or role to add/remove them. FredBoat will do a case-insensitive search of the names and ID numbers.

![search](https://fred.moe/GRe.png)

## A note about selfhosting
The owner of the bot application the bot is running on is automatically given the `BOT_OWNER` permission. Admins specified in `configuration.yml` are granted the `BOT_ADMIN` role. These ranks allow nearly complete control of the bot for things like restarting the bot, in addition to `ADMIN` permissions in all servers. 
