import { useState } from "react";
import { AppInputText } from "../../elements";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

type TMessage = {
  message: string;
  type: "user" | "system";
};

export function ChatBox() {
  const { control, handleSubmit, reset } = useForm<{ message: string }>();
  const [open, setOpen] = useState(true);
  const [data, setData] = useState<TMessage[]>([]);
  const [loading, setLoading] = useState(false);
  console.log("data ~ ", data);
  const addMessage = (data: TMessage) => {
    setData((oldData) => [...oldData, data]);
  };
  const onSubmit = async ({ message }: { message: string }) => {
    try {
      console.log("message ~ ", message);
      addMessage({ message, type: "user" });

      setLoading(true);
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDY0rkjP40JyCY1tIStlFj6A9EcvswvMKA",
        {
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }
      );
      addMessage({
        message: res.data?.candidates?.[0]?.content?.parts?.[0].text,
        type: "system",
      });
      reset({ message: "" });
    } catch (error) {
      console.log("error ~ ", error);
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: 9999 }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#15b9d9",
          width: "56px",
          height: "56px",
          borderRadius: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          cursor: "pointer",
        }}
      >
        <img
          src="/img/chatbox.png"
          style={{ width: "56px", height: "56px", borderRadius: "100px", objectFit: 'cover'}}
        />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={20}
          height={20}
        >
          <path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
        </svg> */}
      </div>
      <div
        className="shadow-lg"
        style={{
          backgroundColor: "#fff",
          width: "400px",
          height: "500px",
          position: "absolute",
          bottom: "100%",
          right: "100%",
          borderRadius: "12px",
          display: open ? "none" : "flex",
          flexDirection: "column",
          paddingTop: "15px",
        }}
      >
        <div
          style={{
            flex: 1,
            width: "100%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            gap: "20px",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                maxWidth: "80%",
                width: "fit-content",
                alignSelf: item.type === "user" ? "flex-end" : "flex-start",
                backgroundColor: "#75b8ed",
                padding: "5px 10px",
                borderRadius: "30px",
              }}
            >
              <p style={{ marginBottom: "0px", color: "#000" }}>
                {item.message}
              </p>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            padding: "10px 15px",
            display: "flex",
            gap: "15px",
            // backgroundColor: "#000",
          }}
        >
          <AppInputText
            name="message"
            control={control}
            placeholder={"Gửi..."}
          />
          <button
            type="submit"
            className="btn btn-primary text-white px-3 py-3"
          >
            {loading ? "..." : "Gửi"}
          </button>
        </form>
      </div>
    </div>
  );
}
