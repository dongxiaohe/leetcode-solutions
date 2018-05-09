object Solution {

  def accountsMerge(accounts: List[List[String]]): List[List[String]] = {
    def combine(list: List[List[String]]): List[List[String]] = {

	  @tailrec
      def mergeL(a: Set[Set[String]], acc: Set[Set[String]]): Set[Set[String]] = {
          a match {
            case t if t.isEmpty => acc
            case t =>
              val h = t.head
              val l = t.tail
              l.partition(_.intersect(h).nonEmpty) match {
                case (merged, _) if merged.isEmpty =>
                  mergeL(l, acc + h)
                case (intersects, others) =>
                  mergeL(others + (intersects + h).flatten, acc)
              }
          }
        }

        mergeL(list.map(_.toSet).toSet, Set.empty).toList.map(_.toList.sorted)
    }

    val stringToList: Map[String, List[List[String]]] = accounts.groupBy(_.head)

    stringToList.values.toList.flatMap(list => {
      val key = list.head.head
      combine(list.map(_.drop(1))).map(key :: _)
    })
  }
}
