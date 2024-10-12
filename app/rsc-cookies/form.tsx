"use client";

import { useActionState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Form({ action }: { action: any }) {
  const [state, formAction] = useActionState(action, null);

  return (
    <form action={formAction}>
      <div id="action-result">Action Result: {state}</div>
      <button type="submit" id="submit-server-action">
        server action
      </button>
    </form>
  );
}
