import discord.vsc

token = "MTAxMzg2MjMxNzMzNjgyNTg4Ng.GuAJIl.15822mk--Jaz5nOwszDyJFwws9K_5JZmcawRNM"

client = discord.Client(1013862317336825886)

@client.event
async def on_ready():
  print(f"Bot logged in as {client.user}")
  
@client.event
async def on_message(msg):
  if msg.autor != client.user:
    if msg.content.lower().sartwith("?hi"):
      await msg.channel.send(f"hi, {msg.authordisplay_name}")
      
client.run(token)
