import { render, screen } from "@testing-library/react";

import { Tooltip } from "../src/Tooltip";

test("MyComponent displays correctoy", () => {
	render(
		<Tooltip content="React Simple tooltip">
			<div>React Simple tooltip</div>
		</Tooltip>
	);

	const heading = screen.getByText(/React Simple tooltip/i);

	expect(heading).toBeInTheDocument();
});
