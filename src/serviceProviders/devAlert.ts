/**
 * Sends error message to dev team
 * @param message input error message as string|object
 * @param error input error code
 */
export default function (message: string, error: string|object){
    console.log({
        message, error
    })
}