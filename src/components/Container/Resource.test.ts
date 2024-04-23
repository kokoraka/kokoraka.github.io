import { ContainerStyle } from "./Resource"

describe("Container resource", () => {
  describe("ContainerStyle class", () => {
    let style: ContainerStyle

    beforeEach(() => {
      style = new ContainerStyle()
    })

    describe("setSize function", () => {
      const testcases = [
        [
          "full",
          "w-full px-3 mx-auto",
        ],
        [
          "3xl",
          "w-full px-3 mx-auto bs-3xl:max-w-bs-3xl",
        ],
        [
          "2xl",
          "w-full px-3 mx-auto bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl",
        ],
        [
          "xl",
          "w-full px-3 mx-auto bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl",
        ],
        [
          "lg",
          "w-full px-3 mx-auto bs-lg:max-w-bs-lg bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl",
        ],
        [
          "md",
          "w-full px-3 mx-auto bs-md:max-w-bs-md bs-lg:max-w-bs-lg bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl",
        ],
        [
          "sm",
          "w-full px-3 mx-auto bs-sm:max-w-bs-sm bs-md:max-w-bs-md bs-lg:max-w-bs-lg bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl",
        ],
      ]

      test.each(testcases)("when input is %s should return %s", (size: string, res: string): any => {
        const container = style
          .setSize(size)
          .build()

        expect(container).toEqual(res)
      })
    })
  })
})
