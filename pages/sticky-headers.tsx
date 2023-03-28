import style from "@/styles/StickyHeaders.module.css";

export default function StickyHeadersPage() {
  return (
    <div className={style.pageContainer}>
      <div className={style.header1}>Header 1</div>
      <div className={style.header2}>Header 2</div>
    </div>
  );
}
