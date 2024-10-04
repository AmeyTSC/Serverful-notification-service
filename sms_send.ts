// import axios from "axios";

// export const smsSent = async(templateInfo: any) => {
//     const config = templateInfo;

//     try{
//         const response= await axios.post(config.url, null, config);
//         return response.data;
//     }catch(error){
//         console.error(`Error sending SMS: ${error.message}`);
//         throw new Error(`Failed to send sms: ${error.message}`)
//     }
// }
import axios from "axios";

export const smsSent = async(templateInfo: any) => {
    const { url, ...config } = templateInfo;  // Extract URL from templateInfo

    try {
        const response = await axios.post(url, {}, config);  // Pass the correct arguments
        return response.data;  // Return the response data
    } catch (error) {
        console.error(`Error sending SMS: ${error.message}`);
        throw new Error(`Failed to send SMS: ${error.message}`);
    }
};
