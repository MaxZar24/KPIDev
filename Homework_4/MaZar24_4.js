class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection
        this.itemsPerPage = itemsPerPage
        this.itemsCount = this.collection.length
        this.pagesCount = Math.ceil(this.itemsCount / this.itemsPerPage)
    }

    itemCount() {
        return this.itemsCount
    }

    pageCount() {
        return this.pagesCount
    }

    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        if (pageIndex < 0 || pageIndex > this.pagesCount - 1) {
            return -1

        } else if (pageIndex === this.pagesCount - 1) {
            return this.itemsCount % this.itemsPerPage
        } else if (this.itemsCount % this.itemsPerPage === 0 || pageIndex < this.pagesCount - 1) {
            return this.itemsPerPage;
        }
    }

    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        if (itemIndex < 0 || itemIndex > this.itemsCount - 1) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);

    }
}