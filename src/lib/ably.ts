import Ably, { type InboundMessage } from "ably";

/**
 * @param scene The Phaser scene where the text will be displayed.
 */

export function performance() {
  const ably = new Ably.Realtime(
    "passcode"
  );
  ably.connection.once("connected", async () => {
    //console.log("Connected");

 const channel = ably.channels.get("get-started");

channel.subscribe((message: InboundMessage) => {
   navigator.vibrate(200);
    alert(message.data);
    if (message.data === "bjorn") {
      window.location.href = "/bjorn";
    }
    else if (message.data === "franco") {
      window.location.href = "/franco2";
    }
    else if (message.data === "kanade") {
      window.location.href = "/kanade";
    }
    else if (message.data === "salawaki") {
      window.location.href = "/salawaki";
    }
    else if (message.data === "rogermond") {
      window.location.href = "/rogermond";
    }
});
   
  });
}

