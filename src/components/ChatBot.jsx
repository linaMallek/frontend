import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useChatBot from "@/hooks/useChatbot";
import { useEffect } from "react";

export default function ChatBot() {
  useEffect(() => {
    const chatHistory = document.getElementById("chat-history");
    const userInput = document.getElementById("user-input");
    const form = document.getElementById("chat-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      useChatBot(chatHistory, userInput);
    });
  }, []);

  return (
    <div className="yesflex yesjustify-center yesitems-center yesw-full yesmin-h-screen yesbg-docblue yespx-4 yespy-8 yesfont-sans yesfont-light yesleading-normal yesantialiased yesrelative yesoverflow-hidden yesz-0 yesborder-t-2 yesborder-docblue">
      <div className="" id="chat-container">
        <h1 className="yestext-3xl yesfont-semibold yesmb-4 yesw-full yestext-center ">
          <img src="/Chat.svg" className="yesw-10 yesinline-block yesmr-2" />
          Chat with me
        </h1>
        <div
          className=" yesoverflow-auto yesh-56 yesbg-gray-100 yesrounded-lg yesp-4 yesw-full yesmb-4 yesborder-2 yesborder-gray-200
        "
          id="chat-history"
        ></div>
        <form id="chat-form" className="yesgrid yesw-full yesgap-2">
          <Textarea id="user-input" placeholder="Type your message here." />
          <Button>Send message</Button>
        </form>
        <div id="loader">
          <img src="/loader.gif" width="150px" alt="Loading..." />
        </div>
      </div>
    </div>
  );
}
