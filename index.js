module.exports = function BrokerAnywhere(dispatch){
    const chatHook = event => {
        if(!event.message.toLowerCase().includes('!broker')) {
            const npcID = event.message.toLowerCase().slice('!broker '); //capture id from chat. no error handling right now
            const npcTypeObject = {type:npcID}; 
            return dispatch.toClient('S_NPC_MENU_SELECT', 1, npcTypeObject)
        }
        return false
    }
    dispatch.hook('C_CHAT', 1, chatHook)
    dispatch.hook('C_WHISPER', 1, chatHook)
}
