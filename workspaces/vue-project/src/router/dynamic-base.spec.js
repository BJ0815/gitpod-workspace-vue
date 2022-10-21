import { describe, it, expect } from 'vitest'
import { getDynamicBase } from './dynamic-base.helper'


describe("vueRouterDynamicBase", () => {
    it.concurrent.each([
      ["/tsmcchf", "/tsmcchf"],
      ["/tsmcchf/vlog", "/tsmcchf"],
      ["/tsmcchf/vlog/v1", "/tsmcchf"],
      ["/tsmcchf/index.html", "/tsmcchf"],
      ["/tsmcchf/20221011", "/tsmcchf/20221011"],
      ["/tsmcchf/20221012", "/tsmcchf/20221012"],
      ["/tsmcchf/20221012/css", "/tsmcchf/20221012"],
      ["/otherPath/", "/otherPath"],
      ["/otherPath/vlog", "/otherPath"],
      ["/otherPath/20220202/", "/otherPath/20220202"],
    ])("%s ==> %s", async (input, expected) => {
      expect(getDynamicBase(input)).toEqual(expected);
    });
  });