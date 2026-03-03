import React, { useActionState } from "react";

async function submitAction(prevState, formData) {
  const name = formData.get("name");
  if (!name || name.trim().length < 3) {
    return { error: "Name must be at least 3 characters long.", success: false };
  }
  return { error: null, success: true };
}

function ActionStateDemo() {
  const [state, formAction, isPending] = useActionState(submitAction, { error: null, success: false });

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", margin: "10px 0" }}>
      <h3>useActionState Demo</h3>
      <form action={formAction}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" placeholder="Enter name" disabled={isPending} />
        </div>
        <button type="submit" disabled={isPending} style={{ marginTop: "10px" }}>
          {isPending ? "Submitting..." : "Submit"}
        </button>
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        {state.success && <p style={{ color: "green" }}>Form submitted successfully!</p>}
      </form>
    </div>
  );
}

export default ActionStateDemo;
