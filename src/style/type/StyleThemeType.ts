export type StyleThemeType = {
  type: string
  body: string
  voucherBody: string
  voucherBodySelected: string
  headerBackground: string
  headerShadowColor: string
  menuText: string
  menuActiveBackground: string
  menuTextActive: string
  text: string

  // material table
  materialTable: {
    header: {
      backgroundColor: string
      color: string
      borderBottom: string
    }
    rows: {
      backgroundColor: string
      selectedBackgroundColor: string
      color: string
      borderBottom: string
    }
  }
}
