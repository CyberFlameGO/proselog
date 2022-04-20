import { PageTypeEnum } from "$src/generated/graphql"
import { PagesManager } from "$src/components/app/PagesManager"

export default function DashboardPostsPage() {
  return <PagesManager type={PageTypeEnum.Post} />
}
