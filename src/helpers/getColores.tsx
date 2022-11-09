import ImageColors from "react-native-image-colors"

export const getImageColors = async (uri:string)=>{
    const colors = await ImageColors.getColors(uri, {})
    let primary,secondary;
    switch (colors.platform) {
        case 'android':
          // android result properties
          primary = colors.dominant
          secondary = colors.average
          break
        case 'ios':
          // iOS result properties
          primary = colors.primary
          secondary = colors.background
          break
      }

      return [primary,secondary]

}