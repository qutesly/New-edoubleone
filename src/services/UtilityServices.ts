import client from "@/api/client";
import { ContactMessage } from "@/types/data-types";
import { errorMessage, showMessage } from "@/utils/utility";

const sendContactMessage = async (data: ContactMessage) => {
  try {
    const res = (await client.post("contact", data)).data;
    console.log("sent", res);

    return {
      success: true,
    };
  } catch (error) {
    showMessage({
      message: errorMessage(error),
      variant: "error",
    });
    return {
      success: false,
    };
  }
};

const UtilityServices = {
  sendContactMessage,
};

export default UtilityServices;
