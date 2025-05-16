/* components/common/Divider.tsx */
export default function Divider({ color = "border-emerald-400/80" }) {
  return <div className={`my-12 mx-auto w-4/5 border-t-2 ${color}`} />;
}
