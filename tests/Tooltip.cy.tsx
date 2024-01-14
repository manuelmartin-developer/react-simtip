import { Tooltip } from "../src/Tooltip";

describe("<Tooltip />", () => {
	it("renders", () => {
		cy.mount(
			<Tooltip content="React Simple Tooltip">
				<div>Simple tooltip</div>
			</Tooltip>
		);

		cy.findByText(/Simple tooltip/i);
	});
});
