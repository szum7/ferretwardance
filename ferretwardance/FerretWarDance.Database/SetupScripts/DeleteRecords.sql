delete from dbo.[LongTodo];
delete from dbo.[ShortTodo];
delete from dbo.[ArchiveTodo];
DBCC CHECKIDENT ([LongTodo], RESEED, 0)
DBCC CHECKIDENT ([ShortTodo], RESEED, 0)
DBCC CHECKIDENT ([ArchiveTodo], RESEED, 0)