import React, { useState, useCallback } from "react";
import { usePost, useUpdatePost } from "./queries/Countries.query";

export default function Form() {
  const [formData, setFormData] = useState({ userId: 1, id: 1 });
  const [updateStatus, setUpdateStatus] = useState({});
  const { isLoading, error, data } = usePost(1);
  const {
    mutate,
    data: updatedData,
    isLoading: IsSaving,
    isSuccess: isSaved,
    error: saveError
  } = useUpdatePost(1, formData);
  const onSubmit = (e) => {
    e.preventDefault();
    mutate(data);
    setUpdateStatus(data);
  };
  const onChange = (e) => {
    setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  console.log(
    "updatedData",
    updatedData,
    "IsSaving",
    IsSaving,
    "isSaved",
    isSaved,
    "saveError",
    saveError
  );
  console.log("Single post data:", data, updateStatus);
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        outline: "1px solid #000",
        overflow: "scroll"
      }}
    >
      <form onSubmit={onSubmit}>
        <h1>Update Detail</h1>
        <div>
          <label>Title</label>
          <div>
            <input type="text" name="title" onChange={onChange} />
          </div>
        </div>
        <div>
          <label>Body</label>
          <div>
            <input type="text" name="body" onChange={onChange} />
          </div>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <hr />
      {error ? `Error occurred ${error}` : null}
      {isLoading ? (
        "Fetching data"
      ) : (
        <div>
          <div>{data.title}</div>
          <hr />
          <div>{data.body}</div>
        </div>
      )}
    </div>
  );
}
