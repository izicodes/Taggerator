import { HiPlus, HiMinus } from "react-icons/hi";
import { useState } from "react";

const AddTags = () => {
    const [showMinusBtn, setShowMinusBtn] = useState(false);

    const initialSave = {
        listName: [], listTags: []
    };
    
    localStorage.setItem("tagsListData", JSON.stringify(initialSave));

  // const testClick = () => {
  //     const allTagsGroups = document.querySelectorAll('.myTagsGroup');

  //     for (const group of allTagsGroups) {
  //         const groupNameInput = group.querySelector('.myListTextBox input');
  //         const tagsListInput = group.querySelector('.myTagsListTextBox input');

  //         const groupName = groupNameInput.value;
  //         const tagsList = tagsListInput.value;

  //         alert(`Group: ${groupName} and the list is ${tagsList}`);
  //     }
  // }

  // const tagsContainer = document.querySelector('.tagsContainer');

  const addNewInputs = () => {
    const tagsContainer = document.querySelector(".tagsContainer");
    const lastGroup = tagsContainer.querySelector(".myTagsGroup:last-child");
    const newGroup = lastGroup.cloneNode(true); // Create a deep copy
    const currentGroupCount =
      tagsContainer.querySelectorAll(".myTagsGroup").length + 1;

    currentGroupCount > 1 ? setShowMinusBtn(true) : setShowMinusBtn(false);

    const newListNameInput = newGroup.querySelector(".myListTextBox input");
    const newTagsListInput = newGroup.querySelector(".myTagsListTextBox input");

    newListNameInput.value = "";
    newTagsListInput.value = "";

    tagsContainer.appendChild(newGroup);
  };

  const deleteLastInputs = () => {
    const tagsContainer = document.querySelector(".tagsContainer");
    const lastGroup = tagsContainer.querySelector(".myTagsGroup:last-child");
    if (lastGroup) {
      lastGroup.remove();
      const remainingGroups =
        tagsContainer.querySelectorAll(".myTagsGroup").length;
      setShowMinusBtn(remainingGroups > 1);
    } else {
      // Handle the case where no group exists (optional)
      console.log("No groups to delete");
    }
  };
  return (
    <div className="mb-2 w-full">
      <div>
        <p className="mb-2">
          Time to group your tags! <span className="font-bold">List Name</span>{" "}
          is the name of the button you will click to have the tags in{" "}
          <span className="font-bold">Tags List</span> be copied to your
          clipboard!
        </p>
        <p>╰┈➤ Separate each tag with a comma (,)</p>
      </div>
      <hr className="myHR w-1/2 m-auto my-5" />
      <div className="tagsContainer w-full">
        <div className="my-3 flex gap-4 w-full myTagsGroup">
          <div className="flex flex-col myListTextBox w-2/5">
            <p className="text-[#dd7b94] font-bold mb-1">List Name:</p>
            <input
              type="text"
              className="outline-0 myBody border border-black p-1"
              placeholder="Default Tags"
            />
          </div>
          <div className="flex flex-col grow myTagsListTextBox">
            <p className="text-[#dd7b94] font-bold mb-1">Tags List:</p>
            <input
              type="text"
              className="outline-0 p-1 myBody border border-black"
              placeholder="study, studyblr, studyspo, study notes, study motivation, bullet journal, study blog"
            />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-4">
        <div
          className="border border-[#c5c5c5] w-fit bg-[#eeeeee] hover:bg-[#f9e1e7]"
          onClick={addNewInputs}
        >
          <button
            type="button"
            className="border border-t-white border-l-white p-1 font-medium"
            title="♡ Add new group"
          >
            <HiPlus />
          </button>
        </div>
        {showMinusBtn && (
          <div className="border border-[#c5c5c5] w-fit bg-[#eeeeee] hover:bg-[#f9e1e7]">
            <button
              type="button"
              className="border border-t-white border-l-white p-1 font-medium"
              title="♡ Delete last group"
              onClick={deleteLastInputs}
            >
              <HiMinus />
            </button>
          </div>
        )}
      </div>
      {/* Test button */}
      {/* <div className="border border-[#c5c5c5] w-fit bg-[#eeeeee] m-auto hover:bg-[#f9e1e7]" id="TestBtn" onClick={testClick}>
            <button type="button" className="border border-t-white border-l-white p-1 font-medium ">Test your tags!</button>
        </div> */}
    </div>
  );
};

export default AddTags;
