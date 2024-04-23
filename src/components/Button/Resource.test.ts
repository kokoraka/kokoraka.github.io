import { ButtonStyle } from "./Resource"

describe("Button resource", () => {
  describe("ButtonStyle class", () => {
    let style: ButtonStyle

    beforeEach(() => {
      style = new ButtonStyle()
    })

    describe("setTheme function", () => {
      const testcases = [
        // [
        //   "acem",
        //   "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold cursor-pointer",
        // ],
        [
          "invalid",
          "",
        ]
      ]

      test.each(testcases)("when input is %s should return %s", (theme: string, result: string): any => {
        const res = style.
          setTheme(theme).
          build()

        expect(res).toEqual(result)
      })
    })

    // describe("setVariant function", () => {
    //   const testcases = [
    //     [
    //       "acem",
    //       "primary",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold bg-acem-red text-acem-white cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "secondary",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold bg-white text-acem-black border-1 border-acem-black cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "info",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold bg-blue-500 hover:bg-blue-400 text-white cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "success",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold bg-green-600 hover:bg-green-500 text-white cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "danger",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold bg-red-600 hover:bg-red-400 text-white cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "warning",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold bg-amber-600 hover:bg-amber-700 text-white cursor-pointer",
    //     ],
    //   ]

    //   test.each(testcases)("when input is %s should return %s", (theme: string, variant: string, result: string): any => {
    //     const res = style.
    //       setTheme(theme).
    //       setVariant(variant).
    //       build()

    //     expect(res).toEqual(result)
    //   })
    // })

    // describe("setSize function", () => {
    //   const testcases = [
    //     [
    //       "acem",
    //       "2xl",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold xs:py-4 sm:py-4 md:py-4 lg:py-6 xs:px-3 sm:px-6 md:px-7 lg:px-8 text-base md:text-xl cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "xl",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold xs:py-3.5 sm:py-3.5 md:py-3.5 lg:py-4 xs:px-3 sm:px-4 md:px-5 lg:px-6 text-base md:text-lg cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "lg",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold py-2.5 px-4 cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "md",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold py-2 px-3 cursor-pointer",
    //     ],
    //     [
    //       "acem",
    //       "sm",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold py-1 px-2 text-sm cursor-pointer",
    //     ],
    //   ]

    //   test.each(testcases)("when input is %s should return %s", (theme: string, size: string, result: string): any => {
    //     const res = style.
    //       setTheme(theme).
    //       setSize(size).
    //       build()

    //     expect(res).toEqual(result)
    //   })
    // })

    // describe("setDisabled function", () => {
    //   type Value = string | boolean

    //   const testcases = [
    //     [
    //       "acem",
    //       true,
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold cursor-not-allowed",
    //     ],
    //     [
    //       "acem",
    //       false,
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold cursor-pointer",
    //     ],
    //   ]

    //   test.each(testcases)("when input is %s should return %s", (theme: Value, disabled: Value, result: Value): any => {
    //     const res = style.
    //       setTheme(theme as string).
    //       setDisabled(disabled as boolean).
    //       build()

    //     expect(res).toEqual(result)
    //   })
    // })

    // describe("appendClassNames function", () => {
    //   const testcases = [
    //     [
    //       "acem",
    //       "text-lg",
    //       "inline-block rounded-full ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-bold cursor-pointer text-lg",
    //     ],
    //   ]

    //   test.each(testcases)("when input is %s should return %s", (theme: string, appended: string, result: string): any => {
    //     const res = style.
    //       setTheme(theme).
    //       appendClassNames(appended).
    //       build()

    //     expect(res).toEqual(result)
    //   })
    // })
  })
})
