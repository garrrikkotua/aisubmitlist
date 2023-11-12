import PasswordPromptDialog from "@/components/website/password.dialog.component";
import { parse } from "cookie";
import { GetServerSideProps } from "next";

const FullPage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (!isLoggedIn) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold mb-4">
          Enter password to access full database of AI directories
        </h1>
        <PasswordPromptDialog className="w-80" />
      </div>
    );
  }
  return (
    <div className="px-8">
      <h2 className="my-8 font-bold">AI Directories</h2>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/app084FcVQzPVgifc/shrLwU8wcJHoU54qo?backgroundColor=yellow&viewControls=on"
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
      <h2 className="my-8 font-bold">AI Newsletters</h2>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/app084FcVQzPVgifc/shr88x1LHPxaIkHIP?backgroundColor=yellow&viewControls=on"
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      ></iframe>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parse(context.req.headers.cookie || "");
  console.log(cookies);
  const isLoggedIn = cookies[process.env.PASSWORD_COOKIE_NAME!] === "true";
  return {
    props: {
      isLoggedIn,
    },
  };
};

export default FullPage;
