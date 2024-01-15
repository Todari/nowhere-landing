import LABEL_LIST from "@/constant/LableList";
import LabelCard from "./LabelCard";

const Labels = () => {
  const LabelCardComponents: JSX.Element[] = LABEL_LIST.list.map(
    (label) => <LabelCard id={label.id} name={label.name} profile={label.profile} soundCloud={label.soundCloud} tracks={label.tracks} description={label.description} />
  )

  return (
    <div className="bg-black p-8">
      <div className="py-12 flex flex-col gap-12">
        {LabelCardComponents}
      </div>
    </div>
  )
}

export default Labels;