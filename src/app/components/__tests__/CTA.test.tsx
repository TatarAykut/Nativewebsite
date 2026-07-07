import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CTA } from "../CTA";

// Mock the translation hook
vi.mock("../../i18n/LanguageContext", () => ({
  useLanguage: () => ({
    t: {
      cta: {
        badge: "Coming Soon",
        heading1: "Be the first to",
        heading2: "travel natively",
        sub: "Join thousands on our waitlist.",
        placeholder: "your@email.com",
        button: "Join the waitlist",
        success: "You're on the list!",
        disclaimer: "No spam.",
      },
    },
  }),
}));

// Mock supabase
vi.mock("../../../lib/supabase", () => ({
  supabase: {
    from: () => ({
      insert: () => Promise.resolve({ error: null }),
    }),
  },
}));

describe("CTA", () => {
  it("renders the waitlist form", () => {
    render(<CTA />);
    expect(screen.getByPlaceholderText("your@email.com")).toBeDefined();
    expect(screen.getByText("Join the waitlist")).toBeDefined();
  });

  it("shows error for invalid email", async () => {
    const user = userEvent.setup();
    render(<CTA />);
    await user.type(screen.getByPlaceholderText("your@email.com"), "bad-email");
    await user.click(screen.getByText("Join the waitlist"));
    expect(screen.getByText("Please enter a valid email address.")).toBeDefined();
  });

  it("shows error for empty email", async () => {
    const user = userEvent.setup();
    render(<CTA />);
    await user.click(screen.getByText("Join the waitlist"));
    expect(screen.getByText("Please enter your email address.")).toBeDefined();
  });
});
