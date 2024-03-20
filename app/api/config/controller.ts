import { configService } from '@/app/api/config/service'
import { NextResponse } from 'next/server'

export const configController = {
  async getConfig() {
    try {
      const res = await configService.getConfig()
      const json: { [key: string]: string | null} = {}

      res.data.config.forEach((configItem: any) => {
        json[configItem.key] = configItem.value
      })
      return NextResponse.json(json, { status: 200 })
    } catch (e: any) {
      return NextResponse.json({ message: e.message }, { status: 400 })
    }
  },
}
