import { useEditorStore } from "../store/editorStore";
import { generateSummary } from "../services/api";

export default function AIButton() {

const { content } = useEditorStore();

const handleClick = async () => {

const summary = await generateSummary(content);

alert(summary);

};

return (

<button

className="bg-blue-500 text-white p-2"

onClick={handleClick}

>

Generate Summary

</button>

);

}
