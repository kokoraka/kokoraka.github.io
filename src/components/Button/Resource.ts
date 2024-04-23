
export enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INFO = "info",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
}

export enum ButtonSize {
  XXLARGE = "2xl",
  XLARGE = "xl",
  LARGE = "lg",
  MEDIUM = "md",
  SMALL = "sm",
}

export enum ButtonTheme {
  CONSULTANT = "consultant",
}

export type ButtonTypeProps = "button" | "reset" | "submit"
export type ButtonVariantProps = "primary" | "secondary" | "info" | "success" | "danger" | "warning"
export type ButtonSizeProps = "2xl" | "xl" | "lg" | "md" | "sm"
export type ButtonThemeProps = "consultant"

const themes = new Map<string, Map<string, string>>()

const consultantTheme = new Map<string, string>()
consultantTheme.set("", "inline-block rounded-xl ease-out duration-500 disabled:bg-gray-300 disabled:border-0 disabled:text-gray-800 font-verdana sm:!font-poppins")

consultantTheme.set(`variant-${ButtonVariant.PRIMARY}`, "bg-green-500 hover:bg-green-400 text-black border-1 border-transparent hover:border-black")
consultantTheme.set(`variant-${ButtonVariant.SECONDARY}`, "bg-white text-black border-1 border-transparent hover:border-black")
consultantTheme.set(`variant-${ButtonVariant.INFO}`, "bg-blue-500 hover:bg-blue-400 text-white")
consultantTheme.set(`variant-${ButtonVariant.SUCCESS}`, "bg-green-600 hover:bg-green-500 text-white")
consultantTheme.set(`variant-${ButtonVariant.DANGER}`, "bg-red-600 hover:bg-red-400 text-white")
consultantTheme.set(`variant-${ButtonVariant.WARNING}`, "bg-amber-600 hover:bg-amber-700 text-white")

consultantTheme.set(`size-${ButtonSize.XXLARGE}`, "xs:py-4 sm:py-4 md:py-4 lg:py-6 xs:px-4 sm:px-6 md:px-8 lg:px-10 text-base md:text-xl")
consultantTheme.set(`size-${ButtonSize.XLARGE}`, "xs:py-3.5 sm:py-3.5 md:py-3.5 lg:py-4 xs:px-4 sm:px-5 md:px-6 lg:px-9 text-base md:text-lg")
consultantTheme.set(`size-${ButtonSize.LARGE}`, "py-3 px-8")
consultantTheme.set(`size-${ButtonSize.MEDIUM}`, "py-2 px-7")
consultantTheme.set(`size-${ButtonSize.SMALL}`, "py-1 px-3 text-sm")

consultantTheme.set("disabled-true", "cursor-not-allowed")
consultantTheme.set("disabled-false", "cursor-pointer")

themes.set(ButtonTheme.CONSULTANT, consultantTheme)

export class ButtonStyle {

  private theme: string = ""
  private variant: string = ""
  private size: string = ""
  private disabled: boolean = false
  private appendedClassNames: string = ""

  public build(): string {
    let style = ""

    const theme = themes.get(this.theme)
    if (!theme) {
      return style
    }

    if (theme.has("")) {
      style += theme.get("")
    }

    if (theme.has(`variant-${this.variant}`)) {
      style += " " + theme.get(`variant-${this.variant}`)
    }

    if (theme.has(`size-${this.size}`)) {
      style += " " + theme.get(`size-${this.size}`)
    }

    if (theme.has(`disabled-${this.disabled}`)) {
      style += " " + theme.get(`disabled-${this.disabled}`)
    }

    if (this.appendedClassNames !== "") {
      style += " " + this.appendedClassNames
    }

    return style
  }

  public setTheme(theme: string): ButtonStyle {
    this.theme = theme
    return this
  }

  public setVariant(variant: string): ButtonStyle {
    this.variant = variant
    return this
  }

  public setSize(size: string): ButtonStyle {
    this.size = size
    return this
  }

  public setDisabled(disabled?: boolean): ButtonStyle {
    this.disabled = disabled || false
    return this
  }

  public appendClassNames(classNames?: string): ButtonStyle {
    this.appendedClassNames = classNames || ""
    return this
  }

}
