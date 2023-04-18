import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { BsTrash3, BsCheck2 } from "react-icons/bs";

interface ToggleButtonOptions {
  onClick: () => Promise<void>;
}

/**
 * This function returns a ToggleButton component that toggles between checked and unchecked state.
 * @returns {JSX.Element} - A button component that toggles between checked and unchecked state.
 */

export default function ToggleButton({
  onClick,
}: ToggleButtonOptions): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  async function handleClick() {
    setIsChecked(!isChecked);
    if (isChecked) {
      await onClick();
    }
  }

  return (
    <Button
      onClick={handleClick}
      variant="unstyled"
      size="sm"
      className="focus:outline-none"
    >
      {isChecked ? (
        <BsCheck2 className="h-5 w-5 text-green-500" />
      ) : (
        <BsTrash3 className="h-5 w-5 text-red-500" />
      )}
    </Button>
  );
}
