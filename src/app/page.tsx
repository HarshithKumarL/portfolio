export const revalidate = 0;

import CommonTemplate from "@/components/pages/CommonTemplate";
import { getPageContent } from "@/store/api";

export default async function Home() {
  try {
    const data = await getPageContent();
    if (!data?.fields) {
      return <div>No data available</div>;
    }
    return (
      <main className="flex flex-col items-center justify-between">
        <CommonTemplate {...data.fields} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching page content:", error);
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        Something went wrong
      </div>
    );
  }
}
