import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogPost from "./BlogPost";

describe("BlogPost", () => {
  it("renders the blog post correctly", () => {
    // given
    const mockPost = {
      id: "1",
      title: "Test Post",
      content: "This is a test post content.",
      author: "Test Author",
    };
    // when
    render(<BlogPost {...mockPost} />);
    // then
    expect(
      screen.getByRole("heading", { level: 2, name: /test post/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/test author/i)).toBeInTheDocument();
    expect(
      screen.getByText(/this is a test post content./i)
    ).toBeInTheDocument();
  });
});
