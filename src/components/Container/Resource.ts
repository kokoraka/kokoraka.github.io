
export enum ContainerSize {
  FULL = "full",
  XXXLARGE = "3xl",
  XXLARGE = "2xl",
  XLARGE = "xl",
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}

export type ContainerSizeProps = "full" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm"

const defaultTheme = new Map<string, string>()

defaultTheme.set(`size-${ContainerSize.FULL}`, "w-full px-3 mx-auto")
defaultTheme.set(`size-${ContainerSize.XXXLARGE}`, "w-full px-3 mx-auto bs-3xl:max-w-bs-3xl")
defaultTheme.set(`size-${ContainerSize.XXLARGE}`, "w-full px-3 mx-auto bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl")
defaultTheme.set(`size-${ContainerSize.XLARGE}`, "w-full px-3 mx-auto bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl")
defaultTheme.set(`size-${ContainerSize.LARGE}`, "w-full px-3 mx-auto bs-lg:max-w-bs-lg bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl")
defaultTheme.set(`size-${ContainerSize.MEDIUM}`, "w-full px-3 mx-auto bs-md:max-w-bs-md bs-lg:max-w-bs-lg bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl")
defaultTheme.set(`size-${ContainerSize.SMALL}`, "w-full px-3 mx-auto bs-sm:max-w-bs-sm bs-md:max-w-bs-md bs-lg:max-w-bs-lg bs-xl:max-w-bs-xl bs-2xl:max-w-bs-2xl bs-3xl:max-w-bs-3xl")

export class ContainerStyle {
  private size: string = ""
  private appendedClassNames: string = ""

  public build(): string {
    let style = ""

    if (defaultTheme.has(`size-${this.size}`)) {
      style += defaultTheme.get(`size-${this.size}`)
    }

    if (this.appendedClassNames !== "") {
      style += " " + this.appendedClassNames
    }

    return style
  }

  public setSize(size: string): ContainerStyle {
    this.size = size
    return this
  }

  public appendClassNames(classNames?: string): ContainerStyle {
    this.appendedClassNames = classNames || ""
    return this
  }

}
