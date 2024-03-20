import { getMediaContents } from "@/lib/cms";
import MediaEntry from "../components/MediaEntry";

export default async function MediaPage() {
  const contents = await getMediaContents();

  return (
    <div className="container max-w-screen-lg mx-auto px-4">
      <h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">Media</h1>
      {contents.map((content) => (
        <MediaEntry key={content.sys.id} date={content.date} description={content.description} />
      ))}

      <div className="border-t py-4 md:flex">
        <div className="text-muted-foreground md:w-1/6 md:px-4 md:mt-0.5">
          2021年1月29日
        </div>
        <div className="md:w-5/6 md:pl-4">
          <p><a className="underline" href="https://youtu.be/yo0gRtETHJg">【music artist interview】file.5 - シロイソラ part１ -（tokyo）【サウラボ】 - Sound Laboratory</a></p>
          <p><a className="underline" href="https://youtu.be/Ud1muoF9e3w">【music artist interview】file.5 - シロイソラ part２ -（tokyo）【サウラボ】 - Sound Laboratory</a></p>
          <p>インタビュー動画を撮影していただきました。</p>
        </div>
      </div>
      
    </div>
  );
}