import { getStoreName } from '../../../services/utils/findStore'

export default async (req, res) => {
  return res.send(getStoreName())
}
