import { hasuraClient } from '@/app/api/_db-client/client'
import {configData} from "@/app/api/config/data";

export const configService = {
  async getConfig() {
    return await hasuraClient.query(configData.getConfigQuery)
  },
}
