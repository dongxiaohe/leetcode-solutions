object Solution {

  def accountsMerge(accounts: List[List[String]]): List[List[String]] = {
    def combine(list: List[List[String]]): List[List[String]] = {
      val sets: Set[Set[String]] = list.map(_.toSet).toSet

      def hasIntersection: Set[String] => Boolean = t => {
        sets.count(t.intersect(_).nonEmpty) > 1
      }

      val (merged, rejected) = sets partition hasIntersection

      ((merged.flatten, rejected) match {
        case (a, b) if a.isEmpty => b
        case (a, b) if b.isEmpty => Set(a)
        case (a, b) =>  Set(a, b.flatten)
      }).toList.filter(_.nonEmpty).map(_.toList.sorted)
    }

    val stringToList: Map[String, List[List[String]]] = accounts.groupBy(_.head)

    stringToList.values.toList.flatMap(list => {
      val key = list.head.head
      combine(list.map(_.drop(1))).map(key :: _)
    })
  }
}
