function cleanChat(){
    if (chatLog.childElementCount > 25) {
        chatLog.children[26].remove()
    }
}