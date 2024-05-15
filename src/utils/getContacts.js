import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

export const getContacts = async () =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SEND_COMMAND,
        content: {
            command: {
                method: IMPContainer.CommandMethods.GET,
                uri: "/contacts?$skip=0&$take=10"
            }
        }
    });