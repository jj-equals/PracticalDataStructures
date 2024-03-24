<h1 align='center'>Singly Linked List</h1>
<h2 align='center'>Worst Case Time Complexity by Operation Kind</h2>
<p align='center'>
    <table>
        <thead align='center'>
            <th>Access Operations</th>
            <th>Search Operations</th>
            <th>Insertion Operations</th>
            <th>Deletion Operations</th>
        </thead>
        <tbody align='center'>
            <td>O(n)</td>
            <td>O(n)</td>
            <td>O(1)</td>
            <td>O(1)/O(n)</td>
        </tbody>
    </table>
</p>

## Operations Complexity Description

### Push:
> Insert items on the end of the list. It has a time complexity of O(1) because it doesn`t need to iterate trought the links.

### Pop:
> Remove item on the end of the list. Has a time complexty of O(n) because it has to search the last item linearly in order to remove the link and move the 'tail' pointer to the previous link.

### lookupByValue and lookupByIndex:
> Search items either by their value, returning the index, or  by their indexes, returning their value. Has a time complexty of O(n) because it has to iterate each node linearly beginning from head until the requested item.