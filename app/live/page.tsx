import { MdPeopleAlt } from "react-icons/md";
import { FaRegClock, FaYenSign, FaItunesNote } from "react-icons/fa6";
import ImageDialog from "../components/ui/imagedialog";

export default function LivePage() {
  return (
    <div className="container max-w-screen-lg mx-auto px-4">
      <h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">Live</h1>
      <div className="border-b py-4 md:flex">
        <div className="md:w-1/6 md:px-4 md:mt-0.5">
          2024年5月21日
        </div>
        <div className="md:w-5/6 md:pl-4">
          <h3 className="text-lg font-bold">Sound Laboratory pre.「サウラボフェス vol.2」</h3>
          <p className="text-muted-foreground mb-4 underline"><a href="http://warp.rinky.info/">吉祥寺warp</a></p>
          <div className="grid gap-0.5">
            <div className="flex items-start gap-3">
              <FaRegClock className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">Open 11:30 / Start 12:00</p>
            </div>
            <div className="flex items-start gap-3">
              <FaYenSign className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">¥2,000（+1D）</p>
            </div>
            <div className="flex items-start gap-3">
              <MdPeopleAlt className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">MARKHØR / moopick / 畔（SAYONARA HATE TOWN） / シロイソラ / abenie</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="flex justify-center text-3xl font-semibold mt-8 mb-8">Past live</h2>
      <div className="border-b py-4 md:flex">
        <div className="md:w-1/6 md:px-4 md:mt-0.5">
          2024年2月25日
        </div>
        <div className="md:w-5/6 md:pl-4">
          <h3 className="text-lg font-bold">Sound Laboratory pre.「サウラボフェス vol.1」</h3>
          <p className="text-muted-foreground mb-4 underline"><a href="http://warp.rinky.info/">吉祥寺warp</a></p>
          <div className="grid gap-0.5">
            <div className="flex items-start gap-3">
              <FaRegClock className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">Open 11:30 / Start 12:00</p>
            </div>
            <div className="flex items-start gap-3">
              <MdPeopleAlt className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">MARKHØR / moopick / 畔（SAYONARA HATE TOWN） / シロイソラ / abenie（出演キャンセル）</p>
            </div>
            <div className="flex items-start gap-3">
              <FaItunesNote className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">1. エニグマ　2.エレファントマーチ　3.knot　4.萌葬 feat.ひろむ（MARKHØR）　5.Waive</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b py-4 md:flex">
        <div className="md:w-1/6 md:px-4 md:mt-0.5">
          2024年2月22日
        </div>
        <div className="md:w-5/6 md:pl-4">
          <h3 className="text-lg font-bold">僕らの証</h3>
          <p className="text-muted-foreground mb-4 underline"><a href="http://mahiru-yoru.com/">真昼の月 夜の太陽</a></p>
          <div className="grid gap-0.5">
            <div className="flex items-start gap-3">
              <FaRegClock className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">Open 18:15 / Start 18:45</p>
            </div>
            <div className="flex items-start gap-3">
              <MdPeopleAlt className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">るー / 廣瀬哲也 / animec8 / シロイソラ</p>
            </div>
            <div className="flex items-start gap-3">
              <FaItunesNote className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">1. 再生とぺトリコール　2.エニグマ　3.シオン　4.ice flower　5.温室　6.フォール・イン・ブルー</p>
            </div>
            <div className="mt-2 flex gap-4 justify-start">
              <ImageDialog imageSrc="images/profile.jpg" />
              <ImageDialog imageSrc="images/jacket.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b py-4 md:flex">
        <div className="md:w-1/6 md:px-4 md:mt-0.5">
          2023年12月29日
        </div>
        <div className="md:w-5/6 md:pl-4">
          <h3 className="text-lg font-bold">LIVEHOLIC presents COUNT DOWN SPECIAL2023→2024</h3>
          <p className="text-muted-foreground mb-4 underline"><a href="https://liveholic.jp/">下北沢LIVEHOLIC</a></p>
          <div className="grid gap-0.5">
            <div className="flex items-start gap-3">
              <FaRegClock className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">Open 11:00 / Start 11:30</p>
            </div>
            <div className="flex items-start gap-3">
              <MdPeopleAlt className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">オレンジの街 / 金本実佑 / Nikola Tesla / イチバンロック / コバヤシコ / pale diary / おかえり / シロイソラ / chatnoir(出演キャンセル)</p>
            </div>
            <div className="flex items-start gap-3">
              <FaItunesNote className="flex-shrink-0 mt-1.5"/>
              <p className="flex-grow min-w-0">1. 温室　2.awkward　3.エレファントマーチ　4.光芒紡ぎ　5.A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}