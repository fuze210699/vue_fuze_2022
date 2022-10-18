/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Home from "./HomeView.vue";

describe("Home test !", () => {
  it("should render", () => {
    const wrapper = mount(Home);

    //has p
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
});
